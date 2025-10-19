"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Home() {
  const [clients, setClients] = useState<any[]>([])

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase.from("clients").select("*")
      if (error) console.error(error)
      else setClients(data)
    }

    fetchClients()
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Clients</h1>
      {clients.length === 0 ? (
        <p>No clients yet.</p>
      ) : (
        <ul>
          {clients.map((c) => (
            <li key={c.id}>{c.first_name} {c.last_name}</li>
          ))}
        </ul>
      )}
    </main>
  )
}
