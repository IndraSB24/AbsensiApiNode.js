import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AbsensiDsDataSource} from '../datasources';
import {DoAbsen, DoAbsenRelations, User} from '../models';
import {UserRepository} from './user.repository';

export class DoAbsenRepository extends DefaultCrudRepository<
  DoAbsen,
  typeof DoAbsen.prototype.id,
  DoAbsenRelations
> {

  public readonly absenUser: HasManyRepositoryFactory<User, typeof DoAbsen.prototype.id>;

  constructor(
    @inject('datasources.absensiDs') dataSource: AbsensiDsDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(DoAbsen, dataSource);
    this.absenUser = this.createHasManyRepositoryFactoryFor('absenUser', userRepositoryGetter,);
    this.registerInclusionResolver('absenUser', this.absenUser.inclusionResolver);
  }
}
