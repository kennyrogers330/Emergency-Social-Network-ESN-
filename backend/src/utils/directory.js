const directory = [];

export const JoinCommunity = (id, username, room) => {
  const member = { id, username, room };
  directory.push(member);
  return member;
};

export const getThisUser = (id) => {
  return directory.find((member) => member.id === id);
};

export const onExit = (id) => {
  const i = directory.findIndex((member) => member.id === id);

  if (i !== -1) {
    return directory.splice(i, 1)[0];
  }
};
