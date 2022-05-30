import React from "react";
import {signInAdmin} from "../configs";

export const useSingInAdmin = () => {
	const post = React.useCallback(data => signInAdmin(data), [])

	return {
		actions: {
			post
		}
	}
}