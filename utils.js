export const generate = (prepend, events) => {
  return Object.keys(events).reduce((final, event) => {
    const name = `${prepend}.${event.replace(/([A-Z])/g, (g) =>`.${g[0].toLowerCase()}`)}`;
    final[event] = {
      name,
      schema: events[event]
    };
    return final
  }, {})
};