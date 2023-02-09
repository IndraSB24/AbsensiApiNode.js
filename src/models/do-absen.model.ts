import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './user.model';

@model()
export class DoAbsen extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  jenis_absen: string;

  @property({
    type: 'date',
    required: true,
  })
  tgl: string;

  @property({
    type: 'number',
    default: 0,
  })
  approval?: number;

  @hasMany(() => User, {keyTo: 'doAbsenid'})
  absenUser: User[];

  constructor(data?: Partial<DoAbsen>) {
    super(data);
  }
}

export interface DoAbsenRelations {
  // describe navigational properties here
}

export type DoAbsenWithRelations = DoAbsen & DoAbsenRelations;
