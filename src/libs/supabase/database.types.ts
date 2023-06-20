export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      pomodoroConfig: {
        Row: {
          focus: number;
          id: number;
          longBreak: number;
          shortBreak: number;
          user_id: string;
        };
        Insert: {
          focus: number;
          id?: number;
          longBreak: number;
          shortBreak: number;
          user_id: string;
        };
        Update: {
          focus?: number;
          id?: number;
          longBreak?: number;
          shortBreak?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'pomodoroConfig_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
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
          createdAt: string;
          deletedAt: string | null;
          description: string | null;
          finishedAt: string | null;
          id: number;
          title: string;
          updatedAt: string;
          user_id: string;
        };
        Insert: {
          createdAt?: string;
          deletedAt?: string | null;
          description?: string | null;
          finishedAt?: string | null;
          id?: number;
          title?: string;
          updatedAt?: string;
          user_id: string;
        };
        Update: {
          createdAt?: string;
          deletedAt?: string | null;
          description?: string | null;
          finishedAt?: string | null;
          id?: number;
          title?: string;
          updatedAt?: string;
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
