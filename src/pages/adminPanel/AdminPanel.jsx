import React from 'react';
import {categories} from "../../utils/categories";

const AdminPanel = () => {
	return (
		<div>
			<select>
				<option disabled selected>Choose Category</option>
				{
					categories.map(({id, name, route}) => (
						<option
							key={id}
						>{name}</option>
					))
				}
			</select>
		</div>
	);
};

export default AdminPanel;
