export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          displayname: string | null;
          id: string;
          imgurl: string | null;
        };
        Insert: {
          displayname?: string | null;
          id: string;
          imgurl?: string | null;
        };
        Update: {
          displayname?: string | null;
          id?: string;
          imgurl?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      todos: {
        Row: {
          createdAt: string | null;
          description: string | null;
          finishedAt: string | null;
          id: number;
          title: string;
          user_id: string;
        };
        Insert: {
          createdAt?: string | null;
          description?: string | null;
          finishedAt?: string | null;
          id?: number;
          title?: string;
          user_id: string;
        };
        Update: {
          createdAt?: string | null;
          description?: string | null;
          finishedAt?: string | null;
          id?: number;
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
