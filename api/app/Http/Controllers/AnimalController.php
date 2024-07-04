<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests\StoreAnimalRequest;
use App\Http\Requests\UpdateAnimalRequest;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $animals = Animal::all();
        return response()->json($animals, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'sometimes|required|string|max:255',
            'especie' => 'sometimes|required|string|max:255',
            'raca' => 'nullable|string|max:255',
            'sexo' => 'sometimes|required|string|max:1',
            'status' => 'sometimes|required|string|max:255',
            'dtNascimento' => 'sometimes|required|date',
            'localResgate' => 'sometimes|required|string|max:255',
        ]);

        $animal = Animal::create($request->all());
        return response()->json($animal, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Animal  $animal
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Animal $animal)
    {
        return response()->json($animal, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Animal  $animal
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Animal $animal)
    {
        $request->validate([
            'nome' => 'sometimes|required|string|max:255',
            'especie' => 'sometimes|required|string|max:255',
            'raca' => 'nullable|string|max:255',
            'sexo' => 'sometimes|required|string|max:1',
            'status' => 'sometimes|required|string|max:255',
            'dtNascimento' => 'sometimes|required|date',
            'localResgate' => 'sometimes|required|string|max:255',
        ]);

        $animal->update($request->all());
        return response()->json($animal, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Animal  $animal
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Animal $animal)
    {
        $animal->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
