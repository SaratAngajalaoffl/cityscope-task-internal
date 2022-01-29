import { CREATE_BLOG, EDIT_BLOG, GET_BLOG, GET_DASHBOARD, GET_DRAFTS } from "../constants/urls";
import { getRequest, postRequest } from "../helpers/axios-helper";
import { attachParams } from "../helpers/misc_helper";

export const getDashboard = async () => {
	return await getRequest({
		url: attachParams(GET_DASHBOARD),
		noAuth: true,
	});
};

export const getDrafts = async () => {
	return await getRequest({
		url: attachParams(GET_DRAFTS),
		noAuth: true,
	});
};

export const getBlog = async (blogId) => {
	return await getRequest({
		url: attachParams(GET_BLOG, { blogId }),
		noAuth: true,
	});
};

export const editBlog = async (blogId, data) => {
	return await postRequest({
		url: attachParams(EDIT_BLOG, { blogId }),
		data,
		noAuth: true,
	});
};

export const createBlog = async (data) => {
	return await postRequest({
		url: attachParams(CREATE_BLOG),
		data,
		noAuth: true,
	});
};
