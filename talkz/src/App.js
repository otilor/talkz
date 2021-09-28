import './index.css';
function App() {
  return (
    <div className="App">
      <header class="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white">
  <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
      <a href="/components" class="flex-none text-gray-900">
        <span class="sr-only">Tailwind UI</span>
        <p>Talkz</p>
      </a>
              <p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
          <span class="hidden xl:inline">Read quick ⚡️ news now</span>
          <span class="xl:hidden">by the creators of Tailwind CSS</span>
        </p>
                                    <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
        <a href="/login" class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
          Sign in
          <svg aria-hidden="true" width="11" height="10" fill="none" class="flex-none ml-1.5 text-gray-400 group-hover:text-teal-600">
            <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
          </div>
  </nav>
  </header>
    </div>
  );
}

export default App;
