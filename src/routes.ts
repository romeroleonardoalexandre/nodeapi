import { Router } from 'express';
import TesteRouter from './app/modules/Teste/Router';
class Routes {
    static define(router: Router): Router {
        router.use('/testes', TesteRouter);

        return router;
    }
}

export default Routes.define(Router());