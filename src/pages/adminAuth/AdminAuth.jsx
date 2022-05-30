import React from 'react';
import cls from "./AdminAuth.module.scss";
import FormInput from "../../components/FormInput/FormInput";
import {useForm} from "react-hook-form";
import {useSingInAdmin} from "../../hooks/useSingInAdmin";
import {useNavigate} from "react-router-dom";


const AdminAuth = () => {
	const [isWrong, setIsWrong] = React.useState(false)
	const navigate = useNavigate()

	const {actions} = useSingInAdmin()
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset
	} = useForm({
		mode: "onChange"
	})

	const submitFormHandler = (data) => {
		actions.post(data).then(({data}) => {
			localStorage.setItem('adminToken', data.auth_token )
			navigate('/')
		}).catch(() => setIsWrong(true))
		reset()
	}

	return (
		<div className={cls.formContainer}>
			<form onSubmit={handleSubmit(submitFormHandler)}>
				<div className={cls.formHeader}>
					<h2>Admin Login</h2>
						{isWrong && <span className={cls.error}>Неправильное имя или пароль!</span>}
				</div>
				<div className={cls.formBody}>
					<FormInput
						register={register}
						inputType='text'
						inputName='Имя админа'
						inputRegisterName='username'
						inputError={errors.username}
					/>
					<FormInput
						register={register}
						inputType='password'
						inputName='Пароль админа'
						inputRegisterName='password'
						inputError={errors.password}
					/>
				</div>
				<div className={cls.formFooter}>
					<button
						type='submit'
						disabled={!isValid}
					>Log in
					</button>
				</div>
			</form>
		</div>
	);
};

export default AdminAuth;
