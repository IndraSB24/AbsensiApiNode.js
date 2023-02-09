import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AbsensiDsDataSource} from '../datasources';
import {ApprovalAbsen, ApprovalAbsenRelations} from '../models';

export class ApprovalAbsenRepository extends DefaultCrudRepository<
  ApprovalAbsen,
  typeof ApprovalAbsen.prototype.id,
  ApprovalAbsenRelations
> {
  constructor(
    @inject('datasources.absensiDs') dataSource: AbsensiDsDataSource,
  ) {
    super(ApprovalAbsen, dataSource);
  }
}
