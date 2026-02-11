export default async function Index() {
  const res = await fetch('http://localhost:4200/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store', // Шинэ датаг байнга авахын тулд
    body: JSON.stringify({
      query: `
        query GetData {
          clubs {
            id
            name
            description
            status
            type
            timeTables {
              room
              date
              duration
            }
          }
        }
      `,
    }),
  });

  const { data } = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 border-b-4 border-blue-500 inline-block">
          Миний Клубүүд
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.clubs.map((club: any) => (
            <div key={club.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
              {/* Card Header */}
              <div className="bg-blue-600 p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">{club.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    club.status === 'approved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {club.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <p className="text-gray-600 mb-4 line-clamp-2 italic">
                  "{club.description}"
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-bold mr-2 text-gray-700">Төрөл:</span> {club.type}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-gray-700 mb-2">🗓 Цагийн хуваарь:</h3>
                    {club.timeTables.length > 0 ? club.timeTables.map((tt: any, idx: number) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded-lg text-xs text-gray-600 mb-2">
                        <div className="flex justify-between">
                          <span>📍 Өрөө: {tt.room}</span>
                          <span>⏳ {tt.duration} мин</span>
                        </div>
                        <div className="mt-1 font-medium text-blue-600">
                          {tt.date}
                        </div>
                      </div>
                    )) : (
                      <p className="text-xs text-gray-400">Хуваарь ороогүй байна.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}