import React, { useEffect, useState } from "react";
import LoadingComponent from "../../../components/loading";
import { getDashboard } from "../../../services/blogs-service";
import BlogSummaryCard from "../../../components/blog-summary";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DialogComponent from "./DialogComponent";

function DashboardScreen() {
	const [blogs, setBlogs] = useState([]);

	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		(async () => {
			try {
				const { data, error } = await getDashboard();

				if (!!error) return error;

				setBlogs(data.data);

				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <LoadingComponent />;

	return (
		<div style={{ height: "100%" }}>
			<DialogComponent open={open} handleClose={handleClose} setLoading={setLoading} />
			{blogs.length < 1 && <h1 style={{ width: "100%", height: "90%", display: "grid", placeItems: "center" }}>No Blogs Found</h1>}
			{blogs.map((blog, index) => (
				<BlogSummaryCard key={index} blog={blog} />
			))}
			<Fab variant="extended" color="primary" style={{ position: "fixed", bottom: 30, right: 30 }} onClick={handleClickOpen}>
				<AddIcon sx={{ mr: 1 }} />
				New Blog
			</Fab>
		</div>
	);
}

export default DashboardScreen;
