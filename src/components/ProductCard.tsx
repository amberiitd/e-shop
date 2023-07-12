import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { startCase } from "lodash";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard: FC<{
	id: string;
	label: string;
	image: string;
	category: string;
	price: number;
  size?: number;
}> = (props) => {
	const navigate = useNavigate();
  const ratio = Math.min(props.size || 1, 1);
  const height = 30*ratio;
  const width = 20*ratio;
  const maxLabelChar = Math.ceil(40*ratio);
	return (
		<Card
			sx={{
				width: `${width}rem`,
				height: `${height}rem`,
				"&:hover": { boxShadow: 10 },
				cursor: "pointer",
			}}
		>
			<Box display={"flex"} justifyContent={"center"}>
				<img src={props.image} style={{ height: `${Math.ceil(0.7*height)}rem`}} />
			</Box>
			<CardContent sx={{ paddingTop: `${20*ratio}px` }}>
				<Typography textAlign={"center"}>
					{startCase(props.category)}
				</Typography>
				<Typography
					gutterBottom
					variant="h3"
					textAlign={"center"}
					fontWeight={200*ratio}
          fontSize={`${180*ratio}%`}
				>
					{props.label.length > maxLabelChar
						? props.label.slice(0, maxLabelChar - 3) + "..."
						: props.label}
				</Typography>
				<Typography textAlign={"center"}>${props.price}</Typography>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
