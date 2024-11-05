class AddInternetSpeedsTable < ActiveRecord::Migration[7.2]
  def change
    create_table :internet_speeds, id: :uuid do |t|
      t.references :place, null: false, foreign_key: true, index: true, type: :uuid
      t.string :download_speed, null: false, scale: 2, precision: 15
      t.timestamps
    end
  end
end
