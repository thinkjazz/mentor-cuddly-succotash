import { Card, Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H5, Tiny } from "components/Typography";
import React, { FC } from "react";

const Achievements: FC = () => {
	return (
		<Card sx={{ padding: 4 }}>
			<H5>Ачивки</H5>

			<Stack spacing={3} mt={3}>
				<SingleItem
					name="Франкенштейнровщик"
					position="голова гудит от новых знаний"
					imageUrl="/static/achiv/achive_frank.svg"
				/>
				<SingleItem
					name="Ниндзя QAттори"
					position="резкий быстрый как саи"
					imageUrl="/static/achiv/achive_ninja.svg"
				/>
				<SingleItem
					name="QA Некромант"
					position="блять что за волшебство тёмных сил?"
					imageUrl="/static/achiv/achive_wizard.svg"
				/>
				<SingleItem
					name="QA_сатана"
					position="древний высший демон"
					imageUrl="/static/achiv/achive_penta.svg"
				/>
			</Stack>
		</Card>
	);
};

export default Achievements;

// -------------------------------------------------
type SingleItemProps = {
	name: string;
	imageUrl: string;
	position: string;
};
// -------------------------------------------------

function SingleItem({ name, imageUrl, position }: SingleItemProps) {
	return (
		<Stack direction="row" alignItems="center" spacing={1}>
			<AppAvatar src={imageUrl} />

			<Stack spacing={0.5}>
				<H5 fontSize={12}>{name}</H5>
				<Tiny fontWeight={500} fontSize={10}>
					{position}
				</Tiny>
			</Stack>
		</Stack>
	);
}
