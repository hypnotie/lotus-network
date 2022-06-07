import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { saveProfile } from "./../../../redux/profile-reducer";
import s from "./ProfileAboutForm.module.css";
import profileIcon from "../../../img/icons/navbar/profile.svg";
import aboutMeIcon from "../../../img/icons/profile/about_me.svg";

const ProfileAboutForm = ({ saveProfile, onSubmit, profile, editMode, setEditMode }) => {
	onSubmit = (values) => {
		saveProfile(values.profile);
		setEditMode(false);
	};

	return <div className={s.profileAboutForm}>
		<Formik
			initialValues={{
				profile: {
					FullName: profile.fullName,
					AboutMe: profile.aboutMe,
					LookingForAJob: profile.lookingForAJob,
					LookingForAJobDescription: profile.lookingForAJobDescription,
					contacts: {
						facebook: profile.contacts.facebook,
						website: profile.contacts.website,
						vk: profile.contacts.vk,
						twitter: profile.contacts.twitter,
						instagram: profile.contacts.instagram,
						youtube: profile.contacts.youtube,
						github: profile.contacts.github,
						mainLink: profile.contacts.mainLink
					}
				}
			}}
			onSubmit={onSubmit}
		>
			{({ values, handleSubmit }) => (
				<Form>
					<div className={s.label.fullName}>
						<div className={s.fullName_label}>
							<img src={profileIcon} alt={"Full Name"} />
							<div>Full Name</div>
						</div>
						<Field
							name={"profile.FullName"}
							value={values.profile.FullName}
						>
							{({
								field
							}) => <input
									type={"text"}
									placeholder={"Text"}
									autoComplete={"off"}
									{...field} />
							}
						</Field>
					</div>

					<div className={s.fullName}>
						<div className={s.fullName_label}>
							<img src={aboutMeIcon} alt={"About Me"} />
							<div>About Me</div>
						</div>
						<Field
							name={"profile.AboutMe"}
							value={values.profile.AboutMe}
						>
							{({
								field
							}) => <input
									type={"text"}
									placeholder={"Text"}
									autoComplete={"off"}
									{...field} />
							}
						</Field>
					</div>

					<label>Looking for a Job</label>
					<div>
						<Field
							name={"profile.LookingForAJob"}
							value={values.profile.LookingForAJob}
						>
							{({
								field
							}) => <input
									type={"checkbox"}
									checked={field.value}
									autoComplete={"off"}
									{...field} />
							}
						</Field>
					</div>

					<label>Professional Skills</label>
					<div>
						<Field
							name={"profile.LookingForAJobDescription"}
							value={values.profile.LookingForAJobDescription}
						>
							{({
								field
							}) => <input
									type={"text"}
									placeholder={"Text"}
									autoComplete={"off"}
									{...field} />
							}
						</Field>
					</div>

					<label>Website</label>
					<div>
						{Object.keys(profile.contacts).map(key => <div key={key}>
							<Field type="text" name={`profile.contacts.${key}`} placeholder="Link" />
						</div>)}
					</div>

					<button className={s.editInfoButton} onClick={handleSubmit} type={"submit"}>
						<svg viewBox="0 0 507.506 507.506" width="16" height="16"><g>
							<path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" /></g></svg>
					</button>
					{/* <button
						onClick={handleSubmit}
						type={"submit"}
					>
						Save
					</button> */}
				</Form>
			)}
		</Formik>
	</div>
};

export default connect((() => { }), { saveProfile })(ProfileAboutForm);