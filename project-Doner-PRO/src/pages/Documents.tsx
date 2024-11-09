import React, { useState, useRef } from 'react';
import { FileText, Upload, Search, Camera, Plus, DollarSign } from 'lucide-react';

interface PurchaseItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  category: string;
  date: string;
  invoiceId: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const Documents = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories: Category[] = [
    { id: 'meat', name: 'Et & Döner', icon: '🥩' },
    { id: 'chicken', name: 'Tavuk Döner', icon: '🍗' },
    { id: 'vegetable', name: 'Manav', icon: '🥬' },
    { id: 'grocery', name: 'Market', icon: '🏪' },
    { id: 'bread', name: 'Ekmek & Pide', icon: '🥖' },
  ];

  const purchases: PurchaseItem[] = [
    // Et & Döner Kategorisi
    {
      id: 1,
      name: 'Dana Dönerlik Et',
      quantity: 25,
      unit: 'kg',
      price: 2250,
      category: 'meat',
      date: '15.03.2024',
      invoiceId: 'FTR-2024001'
    },
    {
      id: 2,
      name: 'Kuzu Dönerlik Et',
      quantity: 15,
      unit: 'kg',
      price: 1800,
      category: 'meat',
      date: '15.03.2024',
      invoiceId: 'FTR-2024001'
    },
    {
      id: 3,
      name: 'Dana Kıyma',
      quantity: 10,
      unit: 'kg',
      price: 1200,
      category: 'meat',
      date: '14.03.2024',
      invoiceId: 'FTR-2024003'
    },
    // Tavuk Döner Kategorisi
    {
      id: 4,
      name: 'Tavuk Dönerlik',
      quantity: 30,
      unit: 'kg',
      price: 1500,
      category: 'chicken',
      date: '15.03.2024',
      invoiceId: 'FTR-2024001'
    },
    {
      id: 5,
      name: 'Tavuk Göğüs',
      quantity: 20,
      unit: 'kg',
      price: 1000,
      category: 'chicken',
      date: '14.03.2024',
      invoiceId: 'FTR-2024004'
    },
    {
      id: 6,
      name: 'Tavuk Kanat',
      quantity: 15,
      unit: 'kg',
      price: 750,
      category: 'chicken',
      date: '14.03.2024',
      invoiceId: 'FTR-2024004'
    },
    // Manav Kategorisi
    {
      id: 7,
      name: 'Domates',
      quantity: 10,
      unit: 'kg',
      price: 150,
      category: 'vegetable',
      date: '15.03.2024',
      invoiceId: 'FTR-2024002'
    },
    {
      id: 8,
      name: 'Salatalık',
      quantity: 15,
      unit: 'kg',
      price: 225,
      category: 'vegetable',
      date: '14.03.2024',
      invoiceId: 'FTR-2024002'
    },
    {
      id: 9,
      name: 'Soğan',
      quantity: 20,
      unit: 'kg',
      price: 180,
      category: 'vegetable',
      date: '14.03.2024',
      invoiceId: 'FTR-2024002'
    },
    {
      id: 10,
      name: 'Marul',
      quantity: 12,
      unit: 'kg',
      price: 160,
      category: 'vegetable',
      date: '13.03.2024',
      invoiceId: 'FTR-2024005'
    },
    // Market Kategorisi
    {
      id: 11,
      name: 'Ayran',
      quantity: 200,
      unit: 'adet',
      price: 600,
      category: 'grocery',
      date: '14.03.2024',
      invoiceId: 'FTR-2024004'
    },
    {
      id: 12,
      name: 'Kola',
      quantity: 100,
      unit: 'adet',
      price: 800,
      category: 'grocery',
      date: '14.03.2024',
      invoiceId: 'FTR-2024004'
    },
    {
      id: 13,
      name: 'Su',
      quantity: 150,
      unit: 'adet',
      price: 300,
      category: 'grocery',
      date: '13.03.2024',
      invoiceId: 'FTR-2024005'
    },
    // Ekmek & Pide Kategorisi
    {
      id: 14,
      name: 'Lavaş',
      quantity: 500,
      unit: 'adet',
      price: 750,
      category: 'bread',
      date: '14.03.2024',
      invoiceId: 'FTR-2024003'
    },
    {
      id: 15,
      name: 'Pide',
      quantity: 100,
      unit: 'adet',
      price: 500,
      category: 'bread',
      date: '13.03.2024',
      invoiceId: 'FTR-2024005'
    },
    {
      id: 16,
      name: 'Ekmek',
      quantity: 200,
      unit: 'adet',
      price: 400,
      category: 'bread',
      date: '15.03.2024',
      invoiceId: 'FTR-2024006'
    }
  ];

  const calculateCategoryTotals = (categoryId: string) => {
    const items = purchases.filter(p => p.category === categoryId);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const unit = items[0]?.unit || '';
    return { totalQuantity, totalPrice, unit };
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error('Kamera erişimi sağlanamadı:', err);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `fatura_${Date.now()}.jpg`, { type: 'image/jpeg' });
          console.log('Fatura fotoğrafı çekildi:', file);
          setShowInvoiceModal(true);
        }
      }, 'image/jpeg');

      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setShowCamera(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Alım Belgeleri</h1>
        <div className="flex space-x-2">
          <button
            onClick={startCamera}
            className="flex items-center px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50"
          >
            <Camera className="w-4 h-4 mr-2" />
            Fatura Çek
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            <Upload className="w-4 h-4 mr-2" />
            Belge Yükle
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*,.pdf"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setShowInvoiceModal(true);
              }
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        {categories.map((category) => {
          const { totalQuantity, totalPrice, unit } = calculateCategoryTotals(category.id);
          return (
            <div key={category.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </h2>
                </div>
                <span className="text-sm text-gray-500">
                  {purchases.filter(p => p.category === category.id).length} Kayıt
                </span>
              </div>
              <div className="space-y-2">
                {purchases
                  .filter(p => p.category === category.id)
                  .map(purchase => (
                    <div key={purchase.id} className="flex items-center text-sm py-2 border-b border-gray-100 last:border-0">
                      <span className="w-48 font-medium text-gray-900">{purchase.name}</span>
                      <span className="w-32 text-gray-600">{purchase.date}</span>
                      <span className="w-24 text-right text-gray-600">{purchase.quantity} {purchase.unit}</span>
                      <span className="w-32 text-right font-medium text-gray-900">₺{purchase.price.toLocaleString()}</span>
                      <span className="w-32 text-right text-gray-500">{purchase.invoiceId}</span>
                    </div>
                  ))}
                <div className="flex items-center text-sm pt-3 font-semibold border-t border-gray-200">
                  <span className="w-48 text-gray-900">Toplam</span>
                  <span className="w-32"></span>
                  <span className="w-24 text-right text-gray-900">{totalQuantity} {unit}</span>
                  <span className="w-32 text-right text-gray-900">₺{totalPrice.toLocaleString()}</span>
                  <span className="w-32"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Fatura Fotoğrafı Çek</h2>
              <button
                onClick={() => {
                  const stream = videoRef.current?.srcObject as MediaStream;
                  stream?.getTracks().forEach(track => track.stop());
                  setShowCamera(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  const stream = videoRef.current?.srcObject as MediaStream;
                  stream?.getTracks().forEach(track => track.stop());
                  setShowCamera(false);
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Fotoğraf Çek
              </button>
            </div>
          </div>
        </div>
      )}

      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Fatura Bilgileri</h2>
              <button
                onClick={() => setShowInvoiceModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fatura No
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="FTR-2024001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tarih
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tedarikçi
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Tedarikçi adı"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ürünler
                </label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <select className="flex-1 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                      <option value="">Kategori Seçin</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Ürün Adı"
                      className="flex-1 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="number"
                      placeholder="Miktar"
                      className="w-24 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Birim"
                      className="w-20 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="number"
                      placeholder="Fiyat"
                      className="w-32 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-2 flex items-center text-sm text-orange-600 hover:text-orange-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Ürün Ekle
                </button>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowInvoiceModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;