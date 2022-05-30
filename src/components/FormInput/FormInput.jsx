import React from 'react';
import cls from "./FormInput.module.scss";


const FormInput = ({register, inputType, inputName, inputError, inputRegisterName}) => {

	return (
		<label>
			<span className={cls.name}>{inputName}</span>
			{
				inputError?.message && (
					<span className={cls.error}>{inputError.message}</span>
				)
			}
			<input
				type={inputType}
				{...register(inputRegisterName, {
					required: 'Обязательное поле'
				})}
			/>

		</label>
	);
};

export default FormInput;
