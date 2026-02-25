import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Calendar, MapPin, Clock, ArrowRight, User, Tag, Activity, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { SESSIONS, type Session } from '../data/sessions';
import { clsx } from 'clsx';

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get initial state from URL or defaults
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedDay, setSelectedDay] = useState(searchParams.get('day') || 'All');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedSpeaker, setSelectedSpeaker] = useState(searchParams.get('speaker') || 'All');
  const [selectedLevel, setSelectedLevel] = useState(searchParams.get('level') || 'All');
  const [selectedTrack, setSelectedTrack] = useState(searchParams.get('track') || 'All');

  // Update URL when filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) params.q = searchQuery;
    if (selectedDay !== 'All') params.day = selectedDay;
    if (selectedCategory !== 'All') params.category = selectedCategory;
    if (selectedSpeaker !== 'All') params.speaker = selectedSpeaker;
    if (selectedLevel !== 'All') params.level = selectedLevel;
    if (selectedTrack !== 'All') params.track = selectedTrack;
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedDay, selectedCategory, selectedSpeaker, selectedLevel, selectedTrack, setSearchParams]);

  // Extract unique values for filters
  const days = ['All', 'Day 1', 'Day 2', 'Day 3'];
  const categories = ['All', 'Keynote', 'Breakout', 'Learning Lab', 'Customer Story'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const allSpeakers = useMemo(() => 
    ['All', ...Array.from(new Set(SESSIONS.map(s => s.speaker))).sort()],
    []
  );
  
  const allTracks = useMemo(() => 
    ['All', ...Array.from(new Set(SESSIONS.flatMap(s => s.details.tracks))).sort()],
    []
  );

  const filteredSessions = useMemo<Session[]>(() => {
    return SESSIONS.filter(session => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery ||
        session.title.toLowerCase().includes(searchLower) ||
        session.speaker.toLowerCase().includes(searchLower) ||
        session.description.toLowerCase().includes(searchLower) ||
        session.details.fullDescription.toLowerCase().includes(searchLower);
      
      const matchesDay = selectedDay === 'All' || session.day === selectedDay;
      const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;
      const matchesSpeaker = selectedSpeaker === 'All' || session.speaker === selectedSpeaker;
      const matchesLevel = selectedLevel === 'All' || session.details.level === selectedLevel;
      const matchesTrack = selectedTrack === 'All' || session.details.tracks.includes(selectedTrack);

      return matchesSearch && matchesDay && matchesCategory && matchesSpeaker && matchesLevel && matchesTrack;
    });
  }, [searchQuery, selectedDay, selectedCategory, selectedSpeaker, selectedLevel, selectedTrack]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDay('All');
    setSelectedCategory('All');
    setSelectedSpeaker('All');
    setSelectedLevel('All');
    setSelectedTrack('All');
  };

  const hasActiveFilters = searchQuery !== '' || 
    selectedDay !== 'All' || 
    selectedCategory !== 'All' || 
    selectedSpeaker !== 'All' || 
    selectedLevel !== 'All' || 
    selectedTrack !== 'All';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Session Catalog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our schedule of events, keynotes, and workshops. Find the sessions that matter to you.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search sessions, speakers, or topics..."
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Day Filter */}
              <div className="space-y-1.5">
                <label htmlFor="day-filter" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Day</label>
                <div className="relative">
                  <select
                    id="day-filter"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-1.5">
                <label htmlFor="category-filter" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Category</label>
                <div className="relative">
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <Filter className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Level Filter */}
              <div className="space-y-1.5">
                <label htmlFor="level-filter" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Level</label>
                <div className="relative">
                  <select
                    id="level-filter"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <Activity className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Speaker Filter */}
              <div className="space-y-1.5">
                <label htmlFor="speaker-filter" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Speaker</label>
                <div className="relative">
                  <select
                    id="speaker-filter"
                    value={selectedSpeaker}
                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    {allSpeakers.map((speaker) => (
                      <option key={speaker} value={speaker}>{speaker}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Track Filter */}
              <div className="space-y-1.5">
                <label htmlFor="track-filter" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Track</label>
                <div className="relative">
                  <select
                    id="track-filter"
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    {allTracks.map((track) => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <Tag className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredSessions.length}</span> sessions
              </p>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  <X className="h-4 w-4 mr-1.5" />
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={session.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={clsx(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider",
                      session.category === 'Keynote' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                      session.category === 'Breakout' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                      session.category === 'Learning Lab' && "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
                      session.category === 'Customer Story' && "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
                    )}>
                      {session.category}
                    </span>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        {session.day}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 dark:text-slate-600">
                        {session.details.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {session.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">
                    {session.description}
                  </p>
                  
                  <div className="space-y-2.5 pt-5 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <User className="h-4 w-4 mr-2.5 text-slate-400" />
                      <span className="font-medium">{session.speaker}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="h-4 w-4 mr-2.5 text-slate-400" />
                      {session.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4 w-4 mr-2.5 text-slate-400" />
                      {session.location}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 mb-4">
                    {session.details.tracks.slice(0, 2).map(track => (
                      <span key={track} className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase">
                        {track}
                      </span>
                    ))}
                    {session.details.tracks.length > 2 && (
                      <span className="text-[10px] text-slate-400 flex items-center">
                        +{session.details.tracks.length - 2} more
                      </span>
                    )}
                  </div>

                  <Link 
                    to={`/catalog/${session.id}`}
                    className="mt-auto inline-flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    View Session Details <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800/50 mb-6">
                  <Search className="h-10 w-10 text-slate-300 dark:text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No matches found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  We couldn't find any sessions matching your current filters. Try resetting or broadening your search.
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-8 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/25"
                  >
                    Clear All Filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

