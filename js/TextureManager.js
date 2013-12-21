/**
 * RyzomJS
 *
 * Copyright (c) 2013 Meelis Mägi <nimetu@gmail.com>
 *
 * @license LGPLv3+
 */

"use strict";

var TextureManager = {
    cache: {},
    path: 'images/',
    init: function (images, onReady) {
        var start = new Date().getTime();
        var loaded = 0, nbImages = images.length;
        for (var i = 0; i < nbImages; i++) {
            var name = images[i];
            var img = new Image();
            img.onload = function () {
                if ((++loaded) >= nbImages && onReady) {
                    var s = ((new Date().getTime()) - start) / 1000;
                    console.debug("all", nbImages, "textures loaded in", s);

                    onReady();
                }
            };
            img.src = this.path + name;

            this.cache[name] = img;
        }
    },
    get: function (name) {
        return this.cache[name];
    }
};

var TextureManagerImages = [
    '1h_over.png', '2h_over.png', 'am_logo.png', 'ar_armpad.png', 'ar_armpad_mask.png', 'ar_botte.png',
    'ar_botte_mask.png', 'ar_gilet.png', 'ar_gilet_mask.png', 'ar_hand.png', 'ar_hand_mask.png', 'ar_helmet.png',
    'ar_helmet_mask.png', 'ar_pantabotte.png', 'ar_pantabotte_mask.png', 'asc_exit.png', 'asc_rolemastercraft.png',
    'asc_rolemasterfight.png', 'asc_rolemasterharvest.png', 'asc_rolemastermagic.png', 'asc_unknown.png',
    'bg_downloader.png', 'bg_empty.png', 'bk_aura.png', 'bk_conso.png', 'bk_consommable.png', 'bk_fyros.png',
    'bk_fyros_brick.png', 'bk_generic.png', 'bk_generic_brick.png', 'bk_goo.png', 'bk_guild.png', 'bk_horde.png',
    'bk_kami.png', 'bk_karavan.png', 'bk_magie_noire_brick.png', 'bk_matis.png', 'bk_matis_brick.png',
    'bk_mission.png', 'bk_mission2.png', 'bk_outpost.png', 'bk_outpost_brick.png', 'bk_power.png', 'bk_primes.png',
    'bk_service.png', 'bk_training.png', 'bk_tryker.png', 'bk_tryker_brick.png', 'bk_zorai.png', 'bk_zorai_brick.png',
    'brick_default.png', 'building_state_24x24.png', 'cb_main_nue.png', 'ch_back.png', 'charge.png', 'clef.png',
    'conso_branche.png', 'conso_branche_mask.png', 'conso_fleur.png', 'conso_fleur_mask.png', 'conso_grappe.png',
    'conso_grappe_mask.png', 'conso_nectar.png', 'conso_nectar_mask.png', 'construction.png', 'cp_back.png',
    'cp_over_break.png', 'cp_over_less.png', 'cp_over_more.png', 'cp_over_opening.png', 'cp_over_opening_2.png',
    'cristal_ammo.png', 'cristal_generic.png', 'cristal_spell.png', 'ef_back.png', 'ef_over_break.png',
    'ef_over_less.png', 'ef_over_more.png', 'fo_back.png', 'fo_over.png', 'fp_ammo.png', 'fp_armor.png',
    'fp_building.png', 'fp_jewel.png', 'fp_melee.png', 'fp_over.png', 'fp_range.png', 'fp_shield.png',
    'fp_tools.png', 'ge_mission_outpost_townhall.png', 'ico_absorb_damage.png', 'ico_accurate.png', 'ico_acid.png',
    'ico_aim.png', 'ico_aim_bird_wings.png', 'ico_aim_flying_kitin_abdomen.png', 'ico_aim_homin_arms.png',
    'ico_aim_homin_chest.png', 'ico_aim_homin_feet.png', 'ico_aim_homin_feint.png', 'ico_aim_homin_hands.png',
    'ico_aim_homin_head.png', 'ico_aim_homin_legs.png', 'ico_aim_kitin_head.png', 'ico_amande.png',
    'ico_ammo_bullet.png', 'ico_ammo_jacket.png', 'ico_angle.png', 'ico_anti_magic_shield.png', 'ico_armor.png',
    'ico_armor_clip.png', 'ico_armor_heavy.png', 'ico_armor_kitin.png', 'ico_armor_light.png', 'ico_armor_medium.png',
    'ico_armor_penalty.png', 'ico_armor_shell.png', 'ico_atys.png', 'ico_atysian.png', 'ico_balance_hp.png',
    'ico_barrel.png', 'ico_bash.png', 'ico_berserk.png', 'ico_blade.png', 'ico_bleeding.png', 'ico_blind.png',
    'ico_blunt.png', 'ico_bomb.png', 'ico_cataliseur_xp.png', 'ico_celestial.png', 'ico_circular_attack.png',
    'ico_clothes.png', 'ico_cold.png', 'ico_concentration.png', 'ico_consommable_over.png', 'ico_constitution.png',
    'ico_counterweight.png', 'ico_craft_buff.png', 'ico_create_sapload.png', 'ico_curse.png', 'ico_debuff.png',
    'ico_debuff_resist.png', 'ico_debuff_skill.png', 'ico_desert.png', 'ico_dexterity.png', 'ico_disarm.png',
    'ico_dodge.png', 'ico_dot.png', 'ico_durability.png', 'ico_electric.png', 'ico_explosif.png', 'ico_extracting.png',
    'ico_fear.png', 'ico_feint.png', 'ico_fire.png', 'ico_firing_pin.png', 'ico_fleur_carac_1.png',
    'ico_fleur_carac_1_mask.png', 'ico_fleur_carac_2.png', 'ico_fleur_carac_2_mask.png', 'ico_fleur_carac_3.png',
    'ico_fleur_carac_3_mask.png', 'ico_focus.png', 'ico_forage_buff.png', 'ico_forbid_item.png', 'ico_forest.png',
    'ico_foreuse.png', 'ico_gardening.png', 'ico_gentle.png', 'ico_goo.png', 'ico_gripp.png', 'ico_haircolor.png',
    'ico_haircut.png', 'ico_hammer.png', 'ico_harmful.png', 'ico_hatred.png', 'ico_heal.png', 'ico_hit_rate.png',
    'ico_incapacity.png', 'ico_intelligence.png', 'ico_interrupt.png', 'ico_invulnerability.png', 'ico_jewel_stone.png',
    'ico_jewel_stone_support.png', 'ico_jungle.png', 'ico_lacustre.png', 'ico_landmark_bonus.png', 'ico_level.png',
    'ico_lining.png', 'ico_location.png', 'ico_madness.png', 'ico_magic.png', 'ico_magic_action_buff.png',
    'ico_magic_focus.png', 'ico_magic_target_buff.png', 'ico_melee_action_buff.png', 'ico_melee_target_buff.png',
    'ico_mental.png', 'ico_metabolism.png', 'ico_mezz.png', 'ico_misfortune.png', 'ico_mission_art_fyros.png',
    'ico_mission_art_matis.png', 'ico_mission_art_tryker.png', 'ico_mission_art_zorai.png', 'ico_mission_barrel.png',
    'ico_mission_bottle.png', 'ico_mission_casket.png', 'ico_mission_medicine.png', 'ico_mission_message.png',
    'ico_mission_package.png', 'ico_mission_pot.png', 'ico_mission_purse.png', 'ico_move.png', 'ico_multi_fight.png',
    'ico_multiple_spots.png', 'ico_noix.png', 'ico_opening_hit.png', 'ico_over_autumn.png', 'ico_over_degenerated.png',
    'ico_over_fauna.png', 'ico_over_flora.png', 'ico_over_hit_arms.png', 'ico_over_hit_chest.png',
    'ico_over_hit_feet.png', 'ico_over_hit_feet_hands.png', 'ico_over_hit_feet_head.png', 'ico_over_hit_feet_x2.png',
    'ico_over_hit_feint_x3.png', 'ico_over_hit_hands.png', 'ico_over_hit_hands_chest.png',
    'ico_over_hit_hands_head.png', 'ico_over_hit_head.png', 'ico_over_hit_head_x3.png', 'ico_over_hit_legs.png',
    'ico_over_homin.png', 'ico_over_kitin.png', 'ico_over_magic.png', 'ico_over_melee.png',
    'ico_over_racial.png', 'ico_over_range.png', 'ico_over_special.png', 'ico_over_spring.png', 'ico_over_summer.png',
    'ico_over_winter.png', 'ico_parry.png', 'ico_piercing.png', 'ico_pointe.png', 'ico_poison.png',
    'ico_power.png', 'ico_preservation.png', 'ico_primal.png', 'ico_prime_roots.png', 'ico_private.png',
    'ico_prospecting.png', 'ico_quality.png', 'ico_racine.png', 'ico_range.png', 'ico_range_action_buff.png',
    'ico_range_target_buff.png', 'ico_ricochet.png', 'ico_root.png', 'ico_rot.png', 'ico_safe.png', 'ico_sap.png',
    'ico_self_damage.png', 'ico_shaft.png', 'ico_shield_buff.png', 'ico_shield_up.png', 'ico_shielding.png',
    'ico_shockwave.png', 'ico_sickness.png', 'ico_slashing.png', 'ico_slow.png', 'ico_soft_spot.png',
    'ico_source_knowledge.png', 'ico_source_time.png', 'ico_speed.png', 'ico_speeding_up.png', 'ico_spell_break.png',
    'ico_spores.png', 'ico_spray.png', 'ico_spying.png', 'ico_stamina.png', 'ico_strength.png', 'ico_stuffing.png',
    'ico_stunn.png', 'ico_task_craft.png', 'ico_task_done.png', 'ico_task_failed.png', 'ico_task_fight.png',
    'ico_task_forage.png', 'ico_task_generic.png', 'ico_task_generic_quart.png', 'ico_task_guild.png',
    'ico_task_rite.png', 'ico_task_travel.png', 'ico_tatoo.png', 'ico_taunt.png', 'ico_time.png',
    'ico_time_bonus.png', 'ico_tourbe.png', 'ico_trigger.png', 'ico_umbrella.png', 'ico_use_enchantement.png',
    'ico_vampire.png', 'ico_visibility.png', 'ico_war_cry.png', 'ico_weight.png', 'ico_wellbalanced.png',
    'ico_will.png', 'ico_windding.png', 'ico_wisdom.png', 'improved_tool.png', 'item_default.png', 'item_plan_over.png',
    'lucky_flower.png', 'mail.png', 'mektoub_pack.png', 'mektoub_steed.png', 'mf_back.png', 'mf_over.png',
    'mg_glove.png', 'mission_icon_0.png', 'mission_icon_1.png', 'mission_icon_2.png', 'mission_icon_3.png',
    'mp3.png', 'mp_amber.png', 'mp_back_curative.png', 'mp_back_offensive.png', 'mp_back_selfonly.png', 'mp_bark.png',
    'mp_batiment_brique.png', 'mp_batiment_colonne.png', 'mp_batiment_colonne_justice.png', 'mp_batiment_comble.png',
    'mp_batiment_noyau_maduk.png', 'mp_batiment_ornement.png', 'mp_batiment_revetement.png', 'mp_batiment_socle.png',
    'mp_batiment_statue.png', 'mp_beak.png', 'mp_blood.png', 'mp_bone.png', 'mp_bud.png', 'mp_buterfly_blue.png',
    'mp_buterfly_cocoon.png', 'mp_cereal.png', 'mp_claw.png', 'mp_dandelion.png', 'mp_dry wood.png', 'mp_dust.png',
    'mp_egg.png', 'mp_eyes.png', 'mp_fang.png', 'mp_fiber.png', 'mp_filament.png', 'mp_firefly_abdomen.png',
    'mp_fish_scale.png', 'mp_flowers.png', 'mp_fresh_loose_soil.png', 'mp_fruit.png', 'mp_generic.png',
    'mp_generic_colorize.png', 'mp_gomme.png', 'mp_goo_residue.png', 'mp_hairs.png', 'mp_hoof.png', 'mp_horn.png',
    'mp_horney.png', 'mp_insect_fossil.png', 'mp_kitin_flesh.png', 'mp_kitin_secretion.png', 'mp_kitinshell.png',
    'mp_larva.png', 'mp_leaf.png', 'mp_leather.png', 'mp_liane.png', 'mp_lichen.png', 'mp_ligament.png',
    'mp_mandible.png', 'mp_meat.png', 'mp_moss.png', 'mp_mushroom.png', 'mp_nail.png', 'mp_oil.png',
    'mp_over_link.png', 'mp_parasite.png', 'mp_pearl.png', 'mp_pelvis.png', 'mp_pigment.png', 'mp_pistil.png',
    'mp_plant_fossil.png', 'mp_pollen.png', 'mp_resin.png', 'mp_ronce.png', 'mp_rostrum.png', 'mp_sap.png',
    'mp_sawdust.png', 'mp_seed.png', 'mp_shell.png', 'mp_silk_worm.png', 'mp_skin.png', 'mp_skull.png',
    'mp_spiders_web.png', 'mp_spine.png', 'mp_stem.png', 'mp_sting.png', 'mp_straw.png', 'mp_suc.png', 'mp_tail.png',
    'mp_tooth.png', 'mp_trunk.png', 'mp_whiskers.png', 'mp_wing.png', 'mp_wood.png', 'mp_wood_node.png',
    'mw_2h_axe.png', 'mw_2h_lance.png', 'mw_2h_mace.png', 'mw_2h_sword.png', 'mw_axe.png', 'mw_dagger.png',
    'mw_lance.png', 'mw_mace.png', 'mw_staff.png', 'mw_sword.png', 'no_action.png', 'num_slash.png', 'op_back.png',
    'op_over_break.png', 'op_over_less.png', 'op_over_more.png', 'pa_anklet.png', 'pa_back.png', 'pa_bracelet.png',
    'pa_diadem.png', 'pa_earring.png', 'pa_over_break.png', 'pa_over_less.png', 'pa_over_more.png', 'pa_pendant.png',
    'pa_ring.png', 'profile.png', 'protect_amber.png', 'pvp_ally_0.png', 'pvp_ally_1.png', 'pvp_ally_2.png',
    'pvp_ally_3.png', 'pvp_ally_4.png', 'pvp_ally_6.png', 'pvp_ally_primas.png', 'pvp_ally_ranger.png',
    'pvp_aura.png', 'pvp_aura_mask.png', 'pvp_boost.png', 'pvp_boost_mask.png', 'pvp_enemy_0.png', 'pvp_enemy_1.png',
    'pvp_enemy_2.png', 'pvp_enemy_3.png', 'pvp_enemy_4.png', 'pvp_enemy_6.png', 'pvp_enemy_marauder.png',
    'pvp_enemy_trytonist.png', 'pw_4.png', 'pw_5.png', 'pw_6.png', 'pw_7.png', 'pw_heavy.png', 'pw_light.png',
    'pw_medium.png', 'quest_coeur.png', 'quest_foie.png', 'quest_jeton.png', 'quest_langue.png', 'quest_louche.png',
    'quest_oreille.png', 'quest_patte.png', 'quest_poils.png', 'quest_queue.png', 'quest_ticket.png', 'r2_live.png',
    'r2_live_over.png', 'r2_live_pushed.png', 'r2_palette_entities.png', 'requirement.png', 'rm_f.png',
    'rm_f_upgrade.png', 'rm_h.png', 'rm_h_upgrade.png', 'rm_m.png', 'rm_m_upgrade.png', 'rm_r.png', 'rm_r_upgrade.png',
    'rpjob_200.png', 'rpjob_201.png', 'rpjob_202.png', 'rpjob_203.png', 'rpjob_204.png', 'rpjob_205.png',
    'rpjob_206.png', 'rpjob_207.png', 'rpjob_advanced.png', 'rpjob_elementary.png', 'rpjob_roleplay.png',
    'rpjob_task.png', 'rpjob_task_certificats.png', 'rpjob_task_convert.png', 'rpjob_task_elementary.png',
    'rpjob_task_generic.png', 'rpjob_task_upgrade.png', 'rpjobitem_200_a.png', 'rpjobitem_200_b.png',
    'rpjobitem_200_c.png', 'rpjobitem_201_a.png', 'rpjobitem_201_b.png', 'rpjobitem_201_c.png', 'rpjobitem_202_a.png',
    'rpjobitem_202_b.png', 'rpjobitem_202_c.png', 'rpjobitem_203_a.png', 'rpjobitem_203_b.png', 'rpjobitem_203_c.png',
    'rpjobitem_204_a.png', 'rpjobitem_204_b.png', 'rpjobitem_204_c.png', 'rpjobitem_205_a.png', 'rpjobitem_205_b.png',
    'rpjobitem_205_c.png', 'rpjobitem_206_a.png', 'rpjobitem_206_b.png', 'rpjobitem_206_c.png', 'rpjobitem_207_a.png',
    'rpjobitem_207_b.png', 'rpjobitem_207_c.png', 'rpjobitem_certifications.png', 'rw_autolaunch.png', 'rw_bowgun.png',
    'rw_grenade.png', 'rw_harpoongun.png', 'rw_launcher.png', 'rw_pistol.png', 'rw_pistolarc.png', 'rw_rifle.png',
    'sapload.png', 'sh_buckler.png', 'sh_large_shield.png', 'small_task_craft.png', 'small_task_done.png',
    'small_task_failed.png', 'small_task_fight.png', 'small_task_forage.png', 'small_task_generic.png',
    'small_task_guild.png', 'small_task_rite.png', 'small_task_travel.png', 'spe_beast.png', 'spe_com.png',
    'spe_inventory.png', 'spe_labs.png', 'spe_memory.png', 'spe_options.png', 'spe_status.png', 'stimulating_water.png',
    'tb_action_attack.png', 'tb_action_config.png', 'tb_action_disband.png', 'tb_action_disengage.png',
    'tb_action_extract.png', 'tb_action_invite.png', 'tb_action_kick.png', 'tb_action_move.png', 'tb_action_run.png',
    'tb_action_sit.png', 'tb_action_stand.png', 'tb_action_stop.png', 'tb_action_talk.png', 'tb_action_walk.png',
    'tb_animals.png', 'tb_config.png', 'tb_connection.png', 'tb_contacts.png', 'tb_desk_1.png', 'tb_desk_2.png',
    'tb_desk_3.png', 'tb_desk_4.png', 'tb_faction.png', 'tb_forum.png', 'tb_guild.png', 'tb_help2.png', 'tb_keys.png',
    'tb_macros.png', 'tb_mail.png', 'tb_mode.png', 'tb_mode_dodge.png', 'tb_mode_parry.png', 'tb_over.png',
    'tb_support.png', 'tb_team.png', 'tb_windows.png', 'tetekitin.png', 'to_ammo.png', 'to_armor.png',
    'to_cooking_pot.png', 'to_fishing_rod.png', 'to_forage.png', 'to_hammer.png', 'to_jewelry_hammer.png',
    'to_jewels.png', 'to_leathercutter.png', 'to_melee.png', 'to_needle.png', 'to_pestle.png', 'to_range.png',
    'to_searake.png', 'to_spade.png', 'to_stick.png', 'to_tunneling_knife.png', 'to_whip.png', 'to_wrench.png',
    'tp_caravane.png', 'tp_kami.png', 'us_back_0.png', 'us_back_1.png', 'us_back_2.png', 'us_back_3.png',
    'us_back_4.png', 'us_back_5.png', 'us_back_6.png', 'us_back_7.png', 'us_back_8.png', 'us_back_9.png',
    'us_ico_0.png', 'us_ico_1.png', 'us_ico_2.png', 'us_ico_3.png', 'us_ico_4.png', 'us_ico_5.png', 'us_ico_6.png',
    'us_ico_7.png', 'us_ico_8.png', 'us_ico_9.png', 'us_over_0.png', 'us_over_1.png', 'us_over_2.png', 'us_over_3.png',
    'us_over_4.png', 'w_am_logo.png', 'w_leader.png', 'w_major.png', 'w_pa_anklet.png', 'w_pa_bracelet.png',
    'w_pa_diadem.png', 'w_pa_earring.png', 'w_pa_pendant.png', 'w_pa_ring.png', 'w_slot_shortcut_id0.png',
    'w_slot_shortcut_id1.png', 'w_slot_shortcut_id2.png', 'w_slot_shortcut_id3.png', 'w_slot_shortcut_id4.png',
    'w_slot_shortcut_id5.png', 'w_slot_shortcut_id6.png', 'w_slot_shortcut_id7.png', 'w_slot_shortcut_id8.png',
    'w_slot_shortcut_id9.png', 'w_slot_shortcut_shift_id0.png', 'w_slot_shortcut_shift_id1.png',
    'w_slot_shortcut_shift_id2.png', 'w_slot_shortcut_shift_id3.png', 'w_slot_shortcut_shift_id4.png',
    'w_slot_shortcut_shift_id5.png', 'w_slot_shortcut_shift_id6.png', 'w_slot_shortcut_shift_id7.png',
    'w_slot_shortcut_shift_id8.png', 'w_slot_shortcut_shift_id9.png', 'xp_cat_green.png',
    'typo/numbers_0.png', 'typo/numbers_1.png', 'typo/numbers_2.png', 'typo/numbers_3.png', 'typo/numbers_4.png',
    'typo/numbers_5.png', 'typo/numbers_6.png', 'typo/numbers_7.png', 'typo/numbers_8.png', 'typo/numbers_9.png',
    'typo/typo_0.png', 'typo/typo_1.png', 'typo/typo_2.png', 'typo/typo_3.png', 'typo/typo_4.png', 'typo/typo_5.png',
    'typo/typo_6.png', 'typo/typo_7.png', 'typo/typo_8.png', 'typo/typo_9.png', 'typo/typo_a.png', 'typo/typo_b.png',
    'typo/typo_c.png', 'typo/typo_d.png', 'typo/typo_e.png', 'typo/typo_f.png', 'typo/typo_g.png', 'typo/typo_h.png',
    'typo/typo_i.png', 'typo/typo_j.png', 'typo/typo_k.png', 'typo/typo_l.png', 'typo/typo_m.png', 'typo/typo_n.png',
    'typo/typo_o.png', 'typo/typo_p.png', 'typo/typo_q.png', 'typo/typo_r.png', 'typo/typo_s.png', 'typo/typo_t.png',
    'typo/typo_u.png', 'typo/typo_v.png', 'typo/typo_w.png', 'typo/typo_x.png', 'typo/typo_y.png', 'typo/typo_z.png',
    'typo/typo_question.png'
];
