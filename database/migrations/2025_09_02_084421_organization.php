<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('organization', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('advisor')->nullable();
            $table->timestamps();
        });

        Schema::create('organization_member', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained('organization')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->enum('role', ['Member', 'President', 'Vice President', 'Secretary', 'Treasurer'])->default('Member');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organization');
        Schema::dropIfExists('organization_member');
    }
};
