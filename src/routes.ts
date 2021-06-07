import { Router } from 'express'

import { TeachersController } from './controllers/TeachersController'

const routes = Router();

const clientsController = new TeachersController()

routes.post('/teachers', clientsController.create)
routes.get('/teachers', clientsController.index)
routes.get('/teachers/:id', clientsController.show)
routes.delete('/teachers/:id', clientsController.delete)
routes.put('/teachers/:id', clientsController.update)

export { routes }

