export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userDescription = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      job: this._userDescription.textContent,
      avatar: this._userAvatar.src,
    };

    return userInfo;
  }

  setUserInfo(name, job, avatar) {
    this._userName.textContent = name;
    this._userDescription.textContent = job;
    this._userAvatar.src = avatar;
  }
}
