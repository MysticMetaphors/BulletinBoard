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
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('advisor')->nullable();
            $table->string('mission')->nullable();
            $table->string('vision')->nullable();
            $table->string('logo')->nullable();
            $table->enum('org_type', ['org', 'foundation'])->default('org');
            $table->timestamps();
        });

        Schema::create('organization_member', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained('organization')->onDelete('cascade');
            $table->string('name');
            $table->string('role')->default('member');
            $table->string('contact')->nullable();
            $table->string('avatar');
            $table->longText('description')->nullable();
            $table->string('experience')->nullable();
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
