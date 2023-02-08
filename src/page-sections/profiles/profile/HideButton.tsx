import VisibilityIcon from "@mui/icons-material/Visibility";

import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

const HideButton: FC<IconButtonProps> = (props) => {
	return (
		<IconButton {...props}>
			<VisibilityIcon sx={{ fontSize: 18, color: "text.secondary" }} />
		</IconButton>
	);
};

export default HideButton
