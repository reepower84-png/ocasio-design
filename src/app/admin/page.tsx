"use client";

import { useState, useEffect } from "react";
import { Contact } from "@/lib/types";

const ADMIN_PASSWORD = "ocasio2024";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_auth");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleMarkAsRead = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, { method: "PATCH" });
      fetchContacts();
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await fetch(`/api/contact/${id}`, { method: "DELETE" });
      setSelectedContact(null);
      fetchContacts();
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
          <div className="text-center mb-8">
            <a href="/" className="text-2xl font-bold tracking-tight inline-block">
              <span className="text-[#2c2c2c]">OCASIO</span>
              <span className="text-[#c9a96e]">.</span>
            </a>
            <p className="text-gray-500 mt-2">관리자 로그인</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#c9a96e] focus:outline-none transition-colors"
                placeholder="비밀번호를 입력하세요"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">
                  비밀번호가 올바르지 않습니다.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c2c2c] text-white py-3 font-medium hover:bg-[#c9a96e] transition-colors"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-[#c9a96e] transition-colors"
            >
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    );
  }

  const unreadCount = contacts.filter((c) => !c.is_read).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#2c2c2c]">OCASIO</span>
              <span className="text-[#c9a96e]">.</span>
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 font-medium">관리자</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-[#c9a96e] transition-colors"
            >
              홈으로
            </a>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">상담 문의 관리</h1>
          <p className="text-gray-500">
            총 {contacts.length}건의 문의 중{" "}
            <span className="text-[#c9a96e] font-medium">{unreadCount}건</span>이 확인되지 않았습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <h2 className="font-semibold text-gray-700">문의 목록</h2>
            </div>
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {contacts.length === 0 ? (
                <div className="p-8 text-center text-gray-400">
                  아직 접수된 문의가 없습니다.
                </div>
              ) : (
                contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => {
                      setSelectedContact(contact);
                      if (!contact.is_read) {
                        handleMarkAsRead(String(contact.id));
                      }
                    }}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                      selectedContact?.id === contact.id ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-gray-800 flex items-center gap-2">
                        {!contact.is_read && (
                          <span className="w-2 h-2 bg-[#c9a96e] rounded-full" />
                        )}
                        {contact.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(contact.created_at).toLocaleDateString("ko-KR")}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{contact.phone}</p>
                    <p className="text-sm text-gray-400 truncate mt-1">
                      {contact.message}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
            {selectedContact ? (
              <div className="h-full flex flex-col">
                <div className="p-6 border-b flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {selectedContact.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(selectedContact.created_at)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(String(selectedContact.id))}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    삭제
                  </button>
                </div>

                <div className="p-6 flex-1">
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        이름
                      </label>
                      <p className="text-gray-800">{selectedContact.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        연락처
                      </label>
                      <p className="text-gray-800">{selectedContact.phone}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      상담 문의 내용
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800 whitespace-pre-wrap">
                        {selectedContact.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t bg-gray-50">
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="inline-flex items-center gap-2 bg-[#2c2c2c] text-white px-6 py-3 text-sm font-medium hover:bg-[#c9a96e] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    전화 연결
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 py-32">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p>문의를 선택해주세요</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
