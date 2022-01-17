export function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
}
export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
export function creanUser() {
  try {
    let user = loadState();
    user.User = { user: null, logado: false };
    saveState(user);
  } catch (e) {
    console.log('creanUser:', e);
  }
}
