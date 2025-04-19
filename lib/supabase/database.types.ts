export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          role: "student" | "faculty" | "tnp"
          avatar_url: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          role: "student" | "faculty" | "tnp"
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          role?: "student" | "faculty" | "tnp"
          avatar_url?: string | null
        }
      }
      roadmaps: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          content: Json
          user_id: string
          company: string | null
          skills: string[] | null
          year: number | null
          view_count: number
          approved: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          content: Json
          user_id: string
          company?: string | null
          skills?: string[] | null
          year?: number | null
          view_count?: number
          approved?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          content?: Json
          user_id?: string
          company?: string | null
          skills?: string[] | null
          year?: number | null
          view_count?: number
          approved?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
