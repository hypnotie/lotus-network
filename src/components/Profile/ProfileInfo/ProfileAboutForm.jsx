import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { saveProfile } from "./../../../redux/profile-reducer";
import s from "./ProfileAboutForm.module.css";
import profileIcon from "../../../img/icons/navbar/profile.svg";
import aboutMeIcon from "../../../img/icons/profile/about.svg";
import job_desc from "../../../img/icons/profile/job_desc.svg";
import main_link from "../../../img/icons/profile/main_link.svg";
import vkIcon from "../../../img/icons/profile/vk.svg"
import instagramIcon from "../../../img/icons/profile/instagram.svg"
import twitterIcon from "../../../img/icons/profile/twitter.svg"
import otherLinkIcon from "../../../img/icons/profile/other_link.svg"
import youtubeIcon from "../../../img/icons/profile/youtube.svg"
import facebookIcon from "../../../img/icons/profile/facebook.svg"
import githubIcon from "../../../img/icons/profile/github.svg"

const ProfileAboutForm = ({ saveProfile, onSubmit, profile, setEditMode }) => {
	onSubmit = async (values, { setFieldValue }) => {
		const isOk = await saveProfile(values.profile, setFieldValue);
		isOk && setEditMode(false);
	};

	const cancelSubmit = (e) => {
		return !!(e.preventDefault() & setEditMode(false))
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
				<Form className={s.editInfo}>
					<div className={s.editHeader}>main information</div>
					<div className={s.editInfo_row}>
						<div className={[s.editSection, s.editSectionFirst, s.editFullName].join(" ")}>
							<div className={s.editSection_label}>
								<img src={profileIcon} alt={"Full Name"} />
								<div>Full name</div>
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
						<div className={[s.editSection, s.editSectionFirst, s.editWebsite].join(" ")}>
							<div className={s.editSection_label}>
								<img src={main_link} alt={"Website"} />
								<div>Website</div>
							</div>
							<Field
								name={"profile.contacts.mainLink"}
								value={values.profile.contacts.mainLink}
							>
								{({
									field
								}) => <input
										type={"text"}
										placeholder={"Link"}
										{...field} />
								}
							</Field>
						</div>
					</div>

					<div className={s.editSection}>
						<div className={s.editSection_label}>
							<img src={aboutMeIcon} alt={"About Me"} />
							<div>About me</div>
						</div>
						<Field
							name={"profile.AboutMe"}
							value={values.profile.AboutMe}
						>
							{({
								field
							}) => <textarea
									type={"text"}
									placeholder={"Text"}
									autoComplete={"off"}
									maxLength={160}
									{...field} />
							}
						</Field>
					</div>

					<div className={s.editSection}>
						<div className={s.editSection_label}>
							<img src={job_desc} alt={"Professional Skills"} />
							<div>Professional skills</div>
						</div>
						<Field
							name={"profile.LookingForAJobDescription"}
							value={values.profile.LookingForAJobDescription}
						>
							{({
								field
							}) => <textarea
									type={"text"}
									placeholder={"Text"}
									autoComplete={"off"}
									maxLength={160}
									{...field} />
							}
						</Field>
					</div>

					<div className={s.editSection}>
						<div className={s.editSection_label}>
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
							<div>Looking for a job</div>
						</div>

					</div>
					<button className={s.editInfoButton} onClick={handleSubmit} type={"submit"}>
						<div className={s.hint}>
							<svg viewBox="0 0 507.506 507.506" width="16" height="16"><g>
								<path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" /></g>
							</svg>
							<span>Save</span>
						</div>
					</button>

					<div className={[s.editHeader, s.editHeaderContacts].join(" ")}>socials</div>
					<div className={s.editContacts}>
						<div className={s.editContacts_left}>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={vkIcon} alt={"VK"} />
									<div>VK</div>
								</div>
								<Field
									name={"profile.contacts.vk"}
									value={values.profile.contacts.vk}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={instagramIcon} alt={"Instagram"} />
									<div>Instagram</div>
								</div>
								<Field
									name={"profile.contacts.instagram"}
									value={values.profile.contacts.instagram}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={twitterIcon} alt={"Twitter"} />
									<div>Twitter</div>
								</div>
								<Field
									name={"profile.contacts.twitter"}
									value={values.profile.contacts.twitter}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={otherLinkIcon} alt={"Other link"} />
									<div>Other link</div>
								</div>
								<Field
									name={"profile.contacts.website"}
									value={values.profile.contacts.website}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
						</div>
						<div className={s.editContacts_right}>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={youtubeIcon} alt={"YouTube"} />
									<div>YouTube</div>
								</div>
								<Field
									name={"profile.contacts.youtube"}
									value={values.profile.contacts.youtube}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={facebookIcon} alt={"Facebook"} />
									<div>Facebook</div>
								</div>
								<Field
									name={"profile.contacts.facebook"}
									value={values.profile.contacts.facebook}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
							<div className={s.editSection}>
								<div className={s.editSection_label}>
									<img className={s.editSocialIcon} src={githubIcon} alt={"Github"} />
									<div>Github</div>
								</div>
								<Field
									name={"profile.contacts.github"}
									value={values.profile.contacts.github}
								>
									{({
										field
									}) => <input
											type={"text"}
											placeholder={"Link"}
											autoComplete={"off"}
											{...field} />
									}
								</Field>
							</div>
						</div>
					</div>
					<button className={[s.editInfoButton, s.editCancel].join(" ")} onClick={cancelSubmit}>
						<div className={s.hint}>
							<svg viewBox="0 0 512 512" width="14" height="14"><g>
								<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.847,114.678,397.322,0.153,256,0z M256,64   c39.843,0.004,78.686,12.477,111.083,35.669L99.669,367.061c-61.503-86.178-41.499-205.897,44.679-267.4   C176.93,76.409,215.972,63.939,256,64z M256,448c-39.837-0.002-78.673-12.475-111.061-35.669l267.392-267.413   c61.514,86.17,41.527,205.891-44.643,267.406C335.098,435.588,296.042,448.064,256,448z" /></g>
							</svg>
							<span>Cancel</span>
						</div>
					</button>

					{values.general && <div className={s.incorrect}>{values.general[0]}</div>}

				</Form>
			)}
		</Formik>
	</div>
};

const mapStateToProps = () => {
	return {}
};

export default connect(mapStateToProps, { saveProfile })(ProfileAboutForm);