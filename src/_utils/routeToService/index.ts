const routeToService = (
  route: string,
  service?: string,
  params?: any
): string => {
  let queries = "?";
  for (const props in params) {
    if (params?.[props] !== undefined && params?.[props] !== null) {
      if (queries.length > 1) {
        queries += "&";
      }
      queries += props.toString() + "=" + params[props].toString();
    }
  }
  return `${service}${route}${queries.length > 1 ? queries : ""}`;
};

export { routeToService };
