import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";

const ItemCard = ({ item }) => {
  const nagivate = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "start",
    color: theme.palette.text.secondary,
  }));

  const sendtoDetails = (id) => {
    nagivate(`/cocktail/${id}`);
  };

  return (
    <Item>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.strDrinkThumb}
            alt={item.strDrink}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.strDrink}
            </Typography>
            <h6 color="text.secondary" style={{ margin: "5px 0 0 0" }}>
              {item.strGlass}
            </h6>
            <Typography variant="body2" color="text.secondary">
              {item.strInstructions.substring(0, 40)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => sendtoDetails(item.idDrink)}
            size="small"
            color="primary"
            variant="outlined"
          >
            Get Details
          </Button>
        </CardActions>
      </Card>
    </Item>
  );
};

export default ItemCard;
