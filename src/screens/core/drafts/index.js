import React, { useEffect, useState } from "react";
import LoadingComponent from "../../../components/loading";
import { getDrafts } from "../../../services/blogs-service";
import BlogSummaryCard from "../../../components/blog-summary";

function DraftsScreen() {
	const [drafts, setDrafts] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const { data, error } = await getDrafts();

				if (!!error) return error;

				setDrafts(data.data);

				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <LoadingComponent />;

	return (
		<div style={{ height: "90%" }}>
			{drafts.length < 1 && <h1 style={{ width: "100%", height: "90%", display: "grid", placeItems: "center" }}>No Drafts Found</h1>}
			{drafts.map((blog, index) => (
				<BlogSummaryCard key={index} blog={blog} />
			))}
		</div>
	);
}

export default DraftsScreen;
