import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ApprovalAbsen} from '../models';
import {ApprovalAbsenRepository} from '../repositories';

export class ApprovalAbsenController {
  constructor(
    @repository(ApprovalAbsenRepository)
    public approvalAbsenRepository : ApprovalAbsenRepository,
  ) {}

  @post('/approval-absens')
  @response(200, {
    description: 'ApprovalAbsen model instance',
    content: {'application/json': {schema: getModelSchemaRef(ApprovalAbsen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalAbsen, {
            title: 'NewApprovalAbsen',
            exclude: ['id'],
          }),
        },
      },
    })
    approvalAbsen: Omit<ApprovalAbsen, 'id'>,
  ): Promise<ApprovalAbsen> {
    return this.approvalAbsenRepository.create(approvalAbsen);
  }

  @get('/approval-absens/count')
  @response(200, {
    description: 'ApprovalAbsen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ApprovalAbsen) where?: Where<ApprovalAbsen>,
  ): Promise<Count> {
    return this.approvalAbsenRepository.count(where);
  }

  @get('/approval-absens')
  @response(200, {
    description: 'Array of ApprovalAbsen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ApprovalAbsen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ApprovalAbsen) filter?: Filter<ApprovalAbsen>,
  ): Promise<ApprovalAbsen[]> {
    return this.approvalAbsenRepository.find(filter);
  }

  @patch('/approval-absens')
  @response(200, {
    description: 'ApprovalAbsen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalAbsen, {partial: true}),
        },
      },
    })
    approvalAbsen: ApprovalAbsen,
    @param.where(ApprovalAbsen) where?: Where<ApprovalAbsen>,
  ): Promise<Count> {
    return this.approvalAbsenRepository.updateAll(approvalAbsen, where);
  }

  @get('/approval-absens/{id}')
  @response(200, {
    description: 'ApprovalAbsen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ApprovalAbsen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ApprovalAbsen, {exclude: 'where'}) filter?: FilterExcludingWhere<ApprovalAbsen>
  ): Promise<ApprovalAbsen> {
    return this.approvalAbsenRepository.findById(id, filter);
  }

  @patch('/approval-absens/{id}')
  @response(204, {
    description: 'ApprovalAbsen PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalAbsen, {partial: true}),
        },
      },
    })
    approvalAbsen: ApprovalAbsen,
  ): Promise<void> {
    await this.approvalAbsenRepository.updateById(id, approvalAbsen);
  }

  @put('/approval-absens/{id}')
  @response(204, {
    description: 'ApprovalAbsen PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() approvalAbsen: ApprovalAbsen,
  ): Promise<void> {
    await this.approvalAbsenRepository.replaceById(id, approvalAbsen);
  }

  @del('/approval-absens/{id}')
  @response(204, {
    description: 'ApprovalAbsen DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.approvalAbsenRepository.deleteById(id);
  }
}
