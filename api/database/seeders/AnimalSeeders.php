<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Animal;
use Illuminate\Support\Facades\DB;

class AnimalSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('animals')->insert([
            [
                'nome' => 'Rex',
                'especie' => 'cão',
                'raca' => 'Labrador',
                'sexo' => 'M',
                'status' => 'adotado',
                'localResgate' => 'Rua A',
                'dtResgate' => '2022-03-01',
                'dtNascimento' => '2020-04-10',
            ],
            [
                'nome' => 'Mimi',
                'especie' => 'gato',
                'raca' => 'Siamês',
                'sexo' => 'F',
                'status' => 'em abrigo',
                'localResgate' => 'Rua B',
                'dtResgate' => '2023-01-15',
                'dtNascimento' => '2016-02-15',

            ],
            [
                'nome' => 'Bolt',
                'especie' => 'cão',
                'raca' => 'Pastor Alemão',
                'sexo' => 'M',
                'status' => 'adotado',
                'localResgate' => 'Rua C',
                'dtResgate' => '2021-07-22',
                'dtNascimento' => '2015-03-15',
            ],
            [
                'nome' => 'Luna',
                'especie' => 'gato',
                'raca' => 'Persa',
                'sexo' => 'F',
                'status' => 'em abrigo',
                'localResgate' => 'Rua D',
                'dtResgate' => '2023-04-10',
                'dtNascimento' => '2010-09-15',
            ],
        ]);
    }
}
