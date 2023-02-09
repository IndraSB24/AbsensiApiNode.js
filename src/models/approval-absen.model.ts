import {Entity, model, property} from '@loopback/repository';

@model()
export class ApprovalAbsen extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  id_absen: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  approval: number;


  constructor(data?: Partial<ApprovalAbsen>) {
    super(data);
  }
}

export interface ApprovalAbsenRelations {
  // describe navigational properties here
}

export type ApprovalAbsenWithRelations = ApprovalAbsen & ApprovalAbsenRelations;
