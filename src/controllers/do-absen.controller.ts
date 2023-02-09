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
import {DoAbsen} from '../models';
import {DoAbsenRepository} from '../repositories';

export class DoAbsenController {
  constructor(
    @repository(DoAbsenRepository)
    public doAbsenRepository : DoAbsenRepository,
  ) {}

  @post('/do-absens')
  @response(200, {
    description: 'DoAbsen model instance',
    content: {'application/json': {schema: getModelSchemaRef(DoAbsen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoAbsen, {
            title: 'NewDoAbsen',
            exclude: ['id'],
          }),
        },
      },
    })
    doAbsen: Omit<DoAbsen, 'id'>,
  ): Promise<DoAbsen> {
    return this.doAbsenRepository.create(doAbsen);
  }

  @get('/do-absens/count')
  @response(200, {
    description: 'DoAbsen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DoAbsen) where?: Where<DoAbsen>,
  ): Promise<Count> {
    return this.doAbsenRepository.count(where);
  }

  @get('/do-absens')
  @response(200, {
    description: 'Array of DoAbsen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DoAbsen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DoAbsen) filter?: Filter<DoAbsen>,
  ): Promise<DoAbsen[]> {
    return this.doAbsenRepository.find(filter);
  }

  @patch('/do-absens')
  @response(200, {
    description: 'DoAbsen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoAbsen, {partial: true}),
        },
      },
    })
    doAbsen: DoAbsen,
    @param.where(DoAbsen) where?: Where<DoAbsen>,
  ): Promise<Count> {
    return this.doAbsenRepository.updateAll(doAbsen, where);
  }

  @get('/do-absens/{id}')
  @response(200, {
    description: 'DoAbsen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DoAbsen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DoAbsen, {exclude: 'where'}) filter?: FilterExcludingWhere<DoAbsen>
  ): Promise<DoAbsen> {
    return this.doAbsenRepository.findById(id, filter);
  }

  @patch('/do-absens/{id}')
  @response(204, {
    description: 'DoAbsen PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoAbsen, {partial: true}),
        },
      },
    })
    doAbsen: DoAbsen,
  ): Promise<void> {
    await this.doAbsenRepository.updateById(id, doAbsen);
  }

  @put('/do-absens/{id}')
  @response(204, {
    description: 'DoAbsen PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() doAbsen: DoAbsen,
  ): Promise<void> {
    await this.doAbsenRepository.replaceById(id, doAbsen);
  }

  @del('/do-absens/{id}')
  @response(204, {
    description: 'DoAbsen DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.doAbsenRepository.deleteById(id);
  }
}
