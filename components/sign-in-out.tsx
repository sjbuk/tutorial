
import { signIn, signOut } from "@/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("Authentik")
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
} 

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  )
} 