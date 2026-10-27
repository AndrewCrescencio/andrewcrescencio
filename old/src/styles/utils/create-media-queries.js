const breakpoints = [768, 1280, 1440];

export const createMediaQueries = (css) => {
  const cssKeyValuePairs = css.reduce((items, item) => {
    const { property, values } = item;

    items.push(
      Array.isArray(item.values)
        ? values.map((value) => ({
            [property]: value,
          }))
        : [{ [property]: values }]
    );
    return items;
  }, []);

  const cssToBreakpoints = [0, ...breakpoints]
    .map((breakpoint, index) => ({
      breakpoint: breakpoint,
      css: cssKeyValuePairs
        .map((array) => array[index])
        .filter(Boolean)
        .reduce((items, item) => {
          items[`${Object.keys(item)}`] = `${Object.values(item)}`;
          return items;
        }, {}),
    }))
    .slice(0, -1);

  const cssMediaQueries = cssToBreakpoints.reduce((items, item) => {
    const { breakpoint, css } = item;

    breakpoint
      ? (items[`@media screen and (min-width: ${breakpoint}px)`] = {
          ...css,
        })
      : (items = { ...css });

    return items;
  }, {});

  return {
    ...cssMediaQueries,
  };
};
