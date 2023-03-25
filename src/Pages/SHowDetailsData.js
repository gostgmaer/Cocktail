import React, { Fragment, useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import InvokeAPI from "../APICall.js/ApiCall";
import {
  ArrowBack,
  ExpandMoreOutlined,
  Favorite,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { mergeinOneArray } from "../utils/function";

const SHowDetailsData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const { detailsCocktail, setdetailsCocktail, loading, setloading } =
    useGlobalContext();

  useEffect(() => {
    APIDETAILSCALL();
    console.log(detailsCocktail);
  }, [id]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const output = Object.entries(detailsCocktail).map(([key, value]) => ({
    key,
    value,
  }));

  const filterArrayIngredient = output
    .filter((item) => item.key.match("strIngredient"))
    .map((item, index) => ({ Ingredient: item.value, id: index + 1 }))
    .filter((item) => item.Ingredient !== null);

  const filterArraymesure = output
    .filter((item) => item.key.match("strMeasure"))
    .map((item, index) => ({ value: item.value, id: index + 1 }))
    .filter((item) => item.value !== null);

  const backtoHomePage = (params) => {
    navigate("/");
  };

  const APIDETAILSCALL = async () => {
    try {
      const res = await InvokeAPI("lookup.php", "get", "", {}, { i: id }, "");
      setdetailsCocktail(res.drinks[0]);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  }));
  return (
    <Box sx={{ flexGrow: 1, display: "flex", py:10, justifyContent: "center" }}>
     {loading? <Skeleton variant="rectangular" height={360} width="50%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>: <Card sx={{ maxWidth: '50%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {detailsCocktail?.strDrink?.substring(0, 1)}
            </Avatar>
          }
          action={
            <IconButton onClick={backtoHomePage} aria-label="back">
              <ArrowBack />
            </IconButton>
          }
          title={detailsCocktail?.strDrink}
          subheader={detailsCocktail.strGlass}
        />
        <CardMedia
          component="img"
          height="360" sx={{objectFit:'cover'}}
          image={detailsCocktail?.strDrinkThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {detailsCocktail?.strInstructions}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {detailsCocktail?.strTags && (
              <Typography paragraph>Tag: {detailsCocktail?.strTags}</Typography>
            )}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <span>
                {" "}
                is Alocholic: {detailsCocktail?.Alcoholic ? "Yes" : "No"}
              </span>
              <span>Category: {detailsCocktail?.strCategory}</span>
            </Typography>
            <Typography variant="h5">Ingredients:</Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {mergeinOneArray(filterArrayIngredient, filterArraymesure).map(
                (dataItem) => (
                  <Fragment key={dataItem?.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        primary={`${dataItem?.Ingredient} : `}
                        secondary={dataItem?.value}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Fragment>
                )
              )}
            </List>
          </CardContent>
        </Collapse>
      </Card>}
    </Box>
  );
};

export default SHowDetailsData;
