import {
  RouteLocationNormalizedLoaded,
  RouteParams,
  Router,
  RouteRecordName,
  RouteRecordRaw,
} from "vue-router";

export default class RouterService {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public getCurrentRoute(): RouteLocationNormalizedLoaded {
    return this.router.currentRoute.value;
  }

  public getCurrentRouteChildren(): RouteRecordRaw[] {
    return this.router.getRoutes().filter((route) => route.name == this.getCurrentRoute().name)[0]
      .children;
  }

  public goTo(route_path?: string, route_name?: string, params?: RouteParams): void {
    this.router.push({ name: route_name, path: route_path, params: params });
  }

  public extend(routes: RouteRecordRaw[]): void {
    routes.forEach((route) => {
      this.router.addRoute(route);
    });
  }

  public get value(): Router {
    return this.router;
  }

  public set value(v: Router) {
    this.router = v;
  }
}
