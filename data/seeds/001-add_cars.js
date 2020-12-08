
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'ABCD-1234-EFGH-5678', make: 'Toyota', model: 'Prius', mileage: 10000, transmission_type: 'Automatic', title_status: 'Salvage' },
        { vin: 'IJKL-8765-MNOP-4321', make: 'Honda', model: 'Accord', mileage: 12000, transmission_type: 'Automatic', title_status: 'Clean' },
        { vin: 'QRST-1234-UVWX-5678', make: 'Jeep', model: 'Wrangler', mileage: 8000 }
      ]);
    });
};
