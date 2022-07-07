import { useState } from "react";
import s from "./ProfileInfo.module.css";
import about from "../../../img/icons/profile/about.svg";
import job_desc from "../../../img/icons/profile/job_desc.svg";
import job from "../../../img/icons/profile/job.png";
import main_link from "../../../img/icons/profile/main_link.svg";
import Preloader from "../../common/Preloader/Preloader";
import def_profile from "../../../img/icons/users/default-profile-picture.png";
import id_pic from "../../../img/icons/users/id.svg";
import ProfileStatus from "./ProfileStatus";
import ProfileAboutForm from "./ProfileAboutForm";
import followIcon from "../../../img/icons/profile/follow.svg";
import unfollowIcon from "../../../img/icons/profile/unfollow.svg";

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};

	return (
		<div className={s.info}>
			<div className={s.avatar}>
				<img className={s.avatarPic} src={props.profile.photos.large || def_profile} alt="Profile" />
				{props.authorizedUserId === props.profile.userId &&
					<div className={s.editSection}>
						<div className={[s.editSectionButton, s.choosePicture].join(" ")}>
							<div className={s.hint}>
								<label htmlFor={"file-input"}>
									<svg viewBox="0 0 24 24" width="16" height="16"><path d="M17.721,3,16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L6.279,3Z" /><circle cx="12" cy="14" r="4" /><path d="M19,5H5a5.006,5.006,0,0,0-5,5v9a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10A5.006,5.006,0,0,0,19,5ZM12,20a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,20Z" /></svg>
									<span>Change picture</span>
								</label>
							</div>
							<input id={"file-input"} className={s.uploadImage} type={"file"} title={" "} onChange={onMainPhotoSelected} />
						</div>
						<div className={s.editSectionButton}>
							{!editMode &&
								<button className={s.editInfoButton} onClick={() => { setEditMode(true) }}>
									<div className={s.hint}>
										<svg viewBox="0 0 24 24" width="14" height="14">
											<path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z" /><path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z" />
										</svg>
										<span>Edit info</span>
									</div>
								</button>
							}
						</div>
					</div>
				}
				{props.authorizedUserId && props.authorizedUserId !== props.profile.userId &&
					<div>
						{props.isFollowed
							? <button
								className={s.follow}
								disabled={props.followingInProgress.some(id => id === props.profile.userId)}
								onClick={() => { props.unfollow(props.profile.userId); }}>
								<img src={unfollowIcon} alt="Unfollow" />
								<p>Unfollow</p>
							</button>
							: <button
								className={s.follow}
								disabled={props.followingInProgress.some(id => id === props.profile.userId)}
								onClick={() => { props.follow(props.profile.userId); }}>
								<img src={followIcon} alt="Follow" />
								<p>Follow</p>
							</button>
						}
					</div>
				}
				{console.log(props.isFollowed)}

			</div>
			<div className={s.description}>
				<div className={s.userInfo}>
					<div className={s.userInfo_top}>
						<h2 className={s.name}>{props.profile.fullName}</h2>
						<button className={s.hint}>
							<div className={s.id} onClick={() => { navigator.clipboard.writeText("https://hypnotie.github.io/users/" + props.profile.userId) }}>
								<img className={s.id_icon} src={id_pic} alt={"User's ID"} />
								<div className={s.id_number}>{props.profile.userId}</div>
								<span className={s.copyLink}>Click to copy profile link</span>
								<span className={s.linkCopied}>Link copied!</span>
							</div>
						</button>
					</div>
					<ProfileStatus
						status={props.status}
						updateStatus={props.updateStatus}
						id={props.profile.userId}
						isAuth={props.isAuth}
						authorizedUserId={props.authorizedUserId}
					/>
					{editMode
						? <ProfileAboutForm profile={props.profile} setEditMode={setEditMode} editMode={editMode} />
						: <ProfileAbout profile={props.profile} />
					}
				</div>
			</div>
		</div >
	);
};

const ProfileAbout = (props) => {
	return (
		<div className={s.userInfo_bottom}>
			<div className={s.userInfo_left}>
				<ul className={s.info_middle_left}>
					{props.profile.aboutMe &&
						<li className={s.about}>
							<img className={s.about_icon} src={about} alt={"About"} />
							<div className={s.about_info}>{props.profile.aboutMe}</div>
						</li>
					}
					{props.profile.lookingForAJobDescription &&
						<li className={s.job_description}>
							<img className={s.job_description_icon} src={job_desc} alt={"Professional Skills"} />
							<div className={s.job_description_info}>{props.profile.lookingForAJobDescription}</div>
						</li>
					}
					{props.profile.contacts.mainLink && (props.profile.contacts.mainLink).includes("http") &&
						<li className={s.main_link}>
							<img className={s.main_link_icon} src={main_link} alt={"Main Link"} />
							<div className={s.main_link_info}>
								<a href={props.profile.contacts.mainLink} target={"_blank"} rel="noreferrer">
									{props.profile.contacts.mainLink}
								</a>
							</div>
						</li>
					}
				</ul>
				<ul className={s.contacts}>
					{props.profile.contacts.facebook &&
						<li>
							<a href={props.profile.contacts.facebook} target={"_blank"} rel="noreferrer">
								<svg viewBox="0 0 24 24" width="16" height="16">
									<g>
										<path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
									</g>
								</svg>
							</a>
						</li>
					}
					{props.profile.contacts.website &&
						<li>
							<a target={"_blank"} rel="noreferrer" href={props.profile.contacts.website}>
								<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" /><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" /><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" /><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" /></svg>
							</a>
						</li>
					}
					{props.profile.contacts.vk &&
						<li>
							<a target={"_blank"} rel="noreferrer" href={props.profile.contacts.vk}>
								<svg viewBox="0 0 24 24" width="16" height="16">
									<g>
										<path d="M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z" />
									</g>
								</svg>
							</a>
						</li>
					}
					{props.profile.contacts.twitter &&
						<li>
							<a target={"_blank"} rel="noreferrer" href={props.profile.contacts.twitter}>
								<svg viewBox="0 0 24 24" width="16" height="16">
									<path id="Logo_00000038394049246713568260000012923108920998390947_" d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" />
								</svg>
							</a>
						</li>
					}
					{props.profile.contacts.instagram &&
						<li>
							<a target={"_blank"} rel="noreferrer" href={props.profile.contacts.instagram}>
								<svg viewBox="0 0 24 24" width="16" height="16">
									<g>
										<path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
										<path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
										<circle cx="18.406" cy="5.594" r="1.44" />
									</g>
								</svg>
							</a>
						</li>
					}
					{props.profile.contacts.youtube &&
						<li>
							<a target={"_blank"} rel="noreferrer" href={props.profile.contacts.youtube}>
								<svg viewBox="0 0 24 24" width="16" height="16">
									<g id="XMLID_184_">
										<path d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z" />
									</g>
								</svg>
							</a>
						</li>
					}
					{props.profile.contacts.github &&
						<li>
							<a target={"_blank"} rel="noreferrer" className={s.gh_link} href={props.profile.contacts.github}>
								<svg viewBox="0 0 24 24" width="16" height="16">
									<g>
										<path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
										<path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
										<path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
										<path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
										<path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
										<path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
										<path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
										<path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
									</g>
								</svg>
							</a>
						</li>
					}
				</ul>
			</div>
			<div className={s.userInfo_right}>
				{props.profile.lookingForAJob &&
					<div className={s.is_job_looking}>
						<div className={s.hint}>
							<img src={job} alt="Looking for a Job" />
							<span>{props.profile.fullName} is looking for a job!</span>
						</div>
					</div>
				}
			</div>

		</div>
	);
};

export default ProfileInfo;