export default function ({store, redirect, route}) {
  if(!store.getters.user.loggedIn && route.path != "/login") {
    return redirect('/login')
  }

  /* this is temporary fix. When default page will be created REMOVE*/
  if (route.path == "/") return redirect('/posts')
}
