import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import LoadingComponent from "../../../components/loading";
import { editBlog, getBlog } from "../../../services/blogs-service";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

function EditBlogScreen() {
	const { blogId } = useParams();
	const history = useHistory();

	const [loading, setLoading] = useState(true);
	const [blog, setBlog] = useState();
	// const [previewType, setPreviewType] = useState("edit");

	const saveDraft = async () => {
		try {
			setLoading(true);

			const { error } = await editBlog(blogId, blog);

			if (!!error) return console.log(error);

			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	const postBlog = async () => {
		try {
			setLoading(true);

			const { error } = await editBlog(blogId, { ...blog, isDraft: false });

			if (!!error) return console.log(error);

			history.push("/");
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const { data, error } = await getBlog(blogId);

				if (!!error) return console.log(error);

				setBlog(data.data);

				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		})();
	}, [blogId]);

	if (loading) return <LoadingComponent />;

	return (
		<div style={{ padding: 20 }}>
			<Grid container spacing={5}>
				<Grid item xs={blog.isDraft ? 10 : 11}>
					<TextField
						id="standard-basic"
						label="Title"
						variant="standard"
						value={blog.title}
						style={{ marginBottom: 20 }}
						onChange={(e) => setBlog((oldval) => ({ ...oldval, title: e.target.value }))}
						fullWidth
					/>
				</Grid>
				{blog.isDraft && (
					<Grid item xs={1}>
						<Button variant="contained" fullWidth onClick={saveDraft}>
							Save
						</Button>
					</Grid>
				)}
				<Grid item xs={1}>
					<Button variant="contained" fullWidthi onClick={postBlog}>
						{blog.isDraft ? "Post" : "Update"}
					</Button>
				</Grid>
			</Grid>
			<MDEditor height={700} value={blog.body} onChange={(e) => setBlog((oldval) => ({ ...oldval, body: e }))} />
		</div>
	);
}

export default EditBlogScreen;
