'use client';

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">All Todos</h1>

          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <p className="text-lg font-semibold text-gray-600">Loading todos...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-5 text-left">Todo</th>
                    <th className="py-3 px-5 text-center">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((p, index) => (
                    <tr
                      key={p.id}
                      className={`border-b transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-200`}
                    >
                      <td className="py-3 px-5">{p.todo}</td>
                      <td className={`py-3 px-5 text-center font-semibold ${p.completed ? "text-green-500" : "text-red-500"}`}>
                        {p.completed ? "✔ Yes" : "✘ No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
