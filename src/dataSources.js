import models from './models';
import UserAPI from './User/api';

const dataSources = () => ({
  User: new UserAPI(models().User),
});

export default dataSources;
