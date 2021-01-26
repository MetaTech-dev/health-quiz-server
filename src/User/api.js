// import isEmail from 'isemail';
import { DataSource } from 'apollo-datasource';

export default class UserAPI extends DataSource {
  constructor(UserModel) {
    super();
    this.UserModel = UserModel;
  }

  initialize(config) {
    this.context = config.context;
  }

  async get({ email, password }) {
    const user = this.context?.user || (await this.UserModel.find({ where: { email, password } }));
    return user;
  }

  async create({ email, password }) {
    const user = await this.UserModel.create({ email, password });
    return user;
  }
}
