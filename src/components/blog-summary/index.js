import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import MDEditor from "@uiw/react-md-editor";
import { useHistory } from "react-router-dom";

export default function BlogSummaryCard({ blog }) {
	const history = useHistory();

	return (
		<Card style={{ margin: 20 }}>
			<CardHeader
				action={
					<IconButton onClick={() => history.push(`/edit/${blog._id}`)}>
						<EditIcon />
					</IconButton>
				}
				title={blog.title}
				subheader={`Posted ${dayjs(blog.createdAt).fromNow()}`}
			/>
			<CardContent>
				<MDEditor.Markdown source={`${blog.body.split("\n")[0]}`} />
			</CardContent>
		</Card>
	);
}
